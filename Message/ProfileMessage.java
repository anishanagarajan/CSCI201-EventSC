package Message;

import java.util.ArrayList;

public class ProfileMessage extends Message {
	String fname;
	String lname;
	int selfRating;
	ArrayList<String> upcomingEvents;
	ArrayList<String> upcomingEventIDs;
	ArrayList<String> previousEvents;
	ArrayList<String> previousEventIDs;
	ArrayList<String> myEvents; //events the user created
	ArrayList<String> myEventIDs;
	
	public ProfileMessage(ArrayList<String> userInfo, ArrayList<String> my, ArrayList<String> myIDs,
			      ArrayList<String> previous, ArrayList<String> previousIDs, 
			      ArrayListArrayList<String> upcoming, ArrayList<String> upcomingIDs){
		fname = userInfo.get(0);
		lname = userInfo.get(1);
		selfRating = userInfo.get(2);
		upcomingEvents = upcoming;
		upcomingEventIDs = upcomingIDs;
		previousEvents = previous;
		previousEventIDs = previousIDs;
		myEvents = my;
		myEventIDs = myIDs;
		this.action = "ProfileMesssage";
	}
	
}
