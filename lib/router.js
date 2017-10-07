FlowRouter.route('/track-lists',{
	name: 'tracklists',
	action(){
		BlazeLayout.render('HomeLayout',{ main: 'myTracklists' });
	}
});

FlowRouter.route('/all-tracks',{
	name: 'alltracks',
	action(){
		BlazeLayout.render('HomeLayout',{ main: 'allTracks'});
	}
})

FlowRouter.route('/edit-track/:trackid',{
	name: 'edittrack',
	action(){
		BlazeLayout.render('HomeLayout',{ main: 'editTrack'});
	}
})

FlowRouter.route("/shows", {
	name: "showsList",
	action() {
		BlazeLayout.render("HomeLayout", {main: 'showsList'});
	}
})

FlowRouter.route('/editshow/:showid',{
	name: 'editshow',
	action(){
		BlazeLayout.render('HomeLayout',{ main: 'editShow'});
	}
})

FlowRouter.route("/showStatus", {
	name: "showStatus",
	action() {
		BlazeLayout.render("HomeLayout", {main: "showStatus"});
	}
})

FlowRouter.route('/start-show',{
	name: 'startshow',
	action(){
		BlazeLayout.render('HomeLayout',{ main: 'createShow'});
	}
})

FlowRouter.route('/showtracks/:showId',{
	name: 'showtracks',
	action(){
		BlazeLayout.render('HomeLayout', {main: 'showTracks'});
	}
})

FlowRouter.route("/addTrackToShow/:showId", {
	name: "addTrackToShow",
	action() {
		BlazeLayout.render('HomeLayout', {main: "addTrackToShow"});
	}
})