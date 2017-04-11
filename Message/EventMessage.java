package Message;

import java.awt.Event;

public class EventMessage extends Message {
	String title, location, description, posterName, posterID;
	int coordinateX, coordinateY, posterRating;
	
	public EventMessage(Event event, User user){
		this.action = "EventMessage";
	}
}
