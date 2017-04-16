package Message;

import BaseClass.Event;

import BaseClass.User;

public class EventMessage extends Message {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	String title, location, description, posterName, posterID;
	int coordinateX, coordinateY, posterRating;
	
	public EventMessage(Event event, User user){
		this.action = "EventMessage";
	}
}
