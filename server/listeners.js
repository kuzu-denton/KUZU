Meteor.startup(function() {
  Meteor.setInterval(function() {
    var apiUrl = 'http://138.197.2.189:8000/status-json.xsl'
    var response = HTTP.get(apiUrl).data
    if (!response.icestats && !response.icestats.source) {
      App.isRadioLogicDown = true
      return
    }
    App.isRadioLogicDown = false
    var numListeners =
      response.icestats &&
      response.icestats.source &&
      response.icestats.source.listeners
    //var res = Meteor.call("getCurrentTrack")
    if (numListeners) {
      ListenerStats.insert({ numListeners: numListeners })
    }
  }, 300000) //every 5 minutes
})

Meteor.methods({
  getListenerHours(startDate, endDate) {
    var listeningHours = 0
    var listenerStatsArray = ListenerStats.find({
      fetchDate: { $gte: startDate, $lt: endDate },
    }).fetch()
    _.each(listenerStatsArray, function(listenerStat) {
      listeningHours += (5 / 60) * listenerStat.numListeners
    })
    return listeningHours
  },
})
