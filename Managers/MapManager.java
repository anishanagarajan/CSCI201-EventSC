package Managers;

import java.util.ArrayList;

import BaseClass.Event;
import BaseClass.User;
import Message.MapMessage;

public class MapManager {
	DatabaseManager dm;
	String currUser;
	ArrayList<Event> events;

	public MapManager(String mUser) { // we prolly don't need the user object
		currUser = mUser;
		dm = new DatabaseManager();
		populateMap();
	}

	public void populateMap() {
		events = (ArrayList<Event>) dm.requestEvents();
		MapMessage mm = new MapMessage(events);
	}

	public Event getEvent(int X, int Y) { // get a particular event when the user clicks a pin
		Event event = dm.getEvent(X, Y);
		MapMessage mm = new MapMessage(event);
	}
}
