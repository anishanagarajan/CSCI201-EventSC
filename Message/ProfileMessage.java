package Message;

import java.util.ArrayList;

public class ProfileMessage extends Message {
	String selfName;
	int selfRating;
	ArrayList<String> upcomingEvents;
	ArrayList<String> upcomingEventIDs;
	ArrayList<String> previousEvents;
	ArrayList<String> previousEventIDs;
	ArrayList<String> myEvents; //events the user created
	ArrayList<String> myEventIDs;
	
	public ProfileMessage(ArrayList<String> previous, ArrayList<String> previousIDs, ArrayListArrayList<String> upcoming, 
			      ArrayList<String> upcomingIDs, ArrayList<String> my, ArrayList<String> myIDs){
		upcomingEvents = upcoming;
		upcomingEventIDs = upcomingIDs;
		previousEvents = previous;
		previousEventIDs = previousIDs;
		myEvents = my;
		myEventIDs = myIDs;
		this.action = "ProfileMesssage";
	}
	
}
