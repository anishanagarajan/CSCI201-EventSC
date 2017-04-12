
public class ProfileManager {
	DatabaseManager dm;
	float sessionID;
	String username;
	User user;
	ArrayList<String> myEvents;
	ArrayList<String> pastEvents;
	ArrayList<String> upcomingEvents;
	ArrayList<String> myEventIDs;
	ArrayList<String> pastEventIDs;
	ArrayList<String> upcomingEventIDs;
	ArrayList<String> userInfo;
	
	public ProfileManager(float mSessionID, String mUsername){
		username = mUsername;
		sessionID = mSessionID;
		dm = new DatabaseManager();
		user = dm.getUserInfo(username);
		userInfo = getUserInfo();
		myEvents = getMyEvents();
		myEventIDs = getMyEventIDs();
		pastEvents = getPastEvents();
		pastEventIDs = getPastEventIDs();
		upcomingEvents = getUpcomingEvents();
		upcomingEventIDs = getUpcomingEventIDs();
		ProfileMessage pm = new ProfileMessage (userInfo, myEvents, myEventIDs, pastEvents, pastEventIDs, upcomingEvents, upcomingEventIDs);
		//add code here:
		/*pass the message to server*/
	}
	public ArrayList<String> getUserInfo(){
		ArrayList<String> mUserInfo;
		String fname = user.getFname();
		mUserInfo.add(fname);
		String lname = user.getLname();
		mUserInfo.add(lname);
		String rating = user.getRating();
		mUserInfo.add(rating);
		/*String pic = user.getPic();
		mUserInfo.add(pic);*/
		return mUserInfo;
	}
	public ArrayList<String> getMyEvents(){
		ArrayList<String> myEventsTempString;
		ArrayList<Event> myEventsTemp = dm.getMyEvents(username, "present");
		for (int i = 0; i < myEventsTemp.size(); i++){
			myEventsTempString.add(myEventsTemp.get(i).getTitle());		 
		}
		return myEventsTempString;
	}
	public ArrayList<String> getMyEventIDs(){
		ArrayList<String> myEventIDTemp;
		ArrayList<Event> myEventsTemp = dm.getMyEvents(username, "present");
		for (int i = 0; i < myEventsTemp.size(); i++){		 
			myEventIDTemp.add(myEventsTemp.get(i).getEventID());
		}
		return myEventIDTemp;
	}
	public ArrayList<String> getPastEvents(){
		 
		ArrayList<String> myEventsTempString;
		ArrayList<Event> myEventsTemp = dm.getMyEvents(username, "past");
		for (int i = 0; i < myEventsTemp.size(); i++){
			myEventsTempString.add(myEventsTemp.get(i).getTitle());		 
		}
		return myEventsTempString;
	}
	public ArrayList<String> getPastEventIDs(){
		ArrayList<String> myEventIDTemp;
		ArrayList<Event> myEventsTemp = dm.getMyEvents(username, "past");
		for (int i = 0; i < myEventsTemp.size(); i++){		 
			myEventIDTemp.add(myEventsTemp.get(i).getEventID());
		}
		return myEventIDTemp;
	}
	public ArrayList<String> getUpcomingEvents(){
		 
		ArrayList<String> myEventsTempString;
		ArrayList<Event> myEventsTemp= dm.getMyEvents(username, "upcoming");
		for (int i = 0; i < myEventsTemp.size(); i++){
			myEventsTempString.add(myEventsTemp.get(i).getTitle());		 
		}
		return myEventsTempString;
	}
	public ArrayList<String> getUpcomingEventIDs(){
		 
		ArrayList<String> myEventIDTemp;
		ArrayList<Event> myEventsTemp = dm.getMyEvents(username, "upcoming");
		for (int i = 0; i < myEventsTemp.size(); i++){		 
			myEventIDTemp.add(myEventsTemp.get(i).getEventID());
		}
		return myEventIDTemp;
	}
	

}
