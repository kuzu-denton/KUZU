Meteor.methods({
  downloadTracksCSV(dateFrom, dateTo) {
    var tracksArray = []
    tracks = Tracklists.find(
      { playDate: { $gte: dateFrom, $lt: dateTo }, trackType: { $eq: 'song' } },
      {
        fields: { playDateOffset: 0, userId: 0, showId: 0, isQueuedForNext: 0 },
        sort: { playDate: 1 },
      }
    ).fetch()
    tracks = _.each(tracks, function(track) {
      var cleanTrack = {}
      cleanTrack.playDate = track.playDate || 'NA'
      cleanTrack.songTitle = track.songTitle || 'NA'
      cleanTrack.artist = track.artist || 'NA'
      cleanTrack.albumName = track.album || 'NA'
      cleanTrack.label = track.label || 'NA'
      cleanTrack.trackLength = track.trackLength || 'NA'
      tracksArray.push(cleanTrack)
    })
    var heading = true
    var delimiter = '|'
    return exportcsv.exportToCSV(tracksArray, heading, delimiter)
  },
})
