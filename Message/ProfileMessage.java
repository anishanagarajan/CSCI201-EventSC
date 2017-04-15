package Message;

import java.util.ArrayList;

public class ProfileMessage extends Message {
	String fname;
	String lname;
	int selfRating;
	ArrayList<String> upcomingEvents;
	ArrayList<int> upcomingEventIDs;
	ArrayList<String> previousEvents;
	ArrayList<int> previousEventIDs;
	ArrayList<String> myEvents; //events the user created
	ArrayList<int> myEventIDs;
	
	public ProfileMessage(ArrayList<String> userInfo, ArrayList<String> my, ArrayList<int> myIDs,
			      ArrayList<String> previous, ArrayList<int> previousIDs, 
			      ArrayListArrayList<String> upcoming, ArrayList<int> upcomingIDs){
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
