package Managers;

import java.util.Date;

import BaseClass.Event;
import BaseClass.User;

public class ProfileManager {
	DatabaseManager dm;
	float sessionID;
	String username;
	User user;
	ArrayList<String> myEvents;
	ArrayList<String> pastEvents;
	ArrayList<String> upcomingEvents;
	ArrayList<int> myEventIDs;
	ArrayList<int> pastEventIDs;
	ArrayList<int> upcomingEventIDs;
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
		ArrayList<Event> myEventsTemp = dm.getEvents(username,true);
		for (int i = 0; i < myEventsTemp.size(); i++){
			myEventsTempString.add(myEventsTemp.get(i).getTitle());		 
		}
		return myEventsTempString;
	}
	public ArrayList<int> getMyEventIDs(){
		ArrayList<int> myEventIDTemp;
		ArrayList<Event> myEventsTemp = dm.getEvents(username,true);
		for (int i = 0; i < myEventsTemp.size(); i++){		 
			myEventIDTemp.add(myEventsTemp.get(i).getEventID());
		}
		return myEventIDTemp;
	}
	public ArrayList<String> getPastEvents(){
		ArrayList<String> myEventsTempString;
		ArrayList<Event> myEventsTemp = dm.getEvents(username, false);
		ArrayList<Event> myPastEvents = null;
		for (int j = 0; j < myEventsTemp.size();j++){
			if (myEventsTemp.get(j).eventTime().equals("past")){
				myPastEvents.add(myEventsTemp.get(j));
			}
		}
		for (int i = 0; i < myPastEvents.size(); i++){
			myEventsTempString.add(myPastEvents.get(i).getTitle());		 
		}
		return myEventsTempString;
	}
	public ArrayList<int> getPastEventIDs(){
		ArrayList<int> myEventIDTemp;
		ArrayList<Event> myEventsTemp = dm.getEvents(username, false);
		for (int i = 0; i < myEventsTemp.size(); i++){	
			if (myEventsTemp.get(i).eventTime().equals("past")){
				myEventIDTemp.add(myEventsTemp.get(i).getEventID());
			}
		}
		return myEventIDTemp;
	}
	public ArrayList<String> getUpcomingEvents(){
		 
		ArrayList<String> myEventsTempString;
		ArrayList<Event> myEventsTemp= dm.getEvents(username, false);
		ArrayList<Event> myUpcomingEvents = null;
		for (int j = 0; j < myEventsTemp.size();j++){
			if (myEventsTemp.get(j).eventTime().equals("upcoming")){
				myUpcomingEvents.add(myEventsTemp.get(j));
			}
		}
		for (int i = 0; i < myUpcomingEvents.size(); i++){
			myEventsTempString.add(myUpcomingEvents.get(i).getTitle());		 
		}
		return myEventsTempString;
	}
	public ArrayList<int> getUpcomingEventIDs(){		 
		ArrayList<int> myEventIDTemp;
		ArrayList<Event> myEventsTemp = dm.getEvents(username, false);
		for (int i = 0; i < myEventsTemp.size(); i++){	
			if (myEventsTemp.get(i).eventTime().equals("upcoming")){
				myEventIDTemp.add(myEventsTemp.get(i).getEventID());
			}
		}
		return myEventIDTemp;
	}
	

}
