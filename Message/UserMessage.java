package Message;

import java.util.ArrayList;

public class UserMessage extends Message {
	String userName, userID; 
	int selfRating;
	ArrayList<String> previousEvents;
	ArrayList<String> previousEventIDs;
	
	public UserMessage(ArrayList<Event> previous, User user){
		previousEvents = new ArrayList<String>();
		previousEventIDs = new ArrayList<String>();
		this.action = "UserMesssage";
	}
	
}
