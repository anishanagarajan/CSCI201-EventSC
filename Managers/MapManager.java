import java.util.List;

public class MapManager {
	DatabaseManager dm;
	float sessionID;
	User currUser;
	ArrayList<Event> events;
	
	public MapManager(float mSessionID, User mUser){ //we prolly don't need the user object
		currUser = mUser;
		sessionID = mSessionID;
		dm = new DatabaseManager();
		populateMap();
	}
	public void populateMap(){
		events = dm.requestEvents();
		MapMessage mm = new MapMessage(events);
	}
	public Event getEvent(int X, int Y){ //get a particular event when the user clicks a pin
		Event event = dm.getEvent(X, Y);
		MapMessage mm = new MapMessage(event);
	}
}
