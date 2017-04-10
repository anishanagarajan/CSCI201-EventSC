import java.util.List;

public class MapManager {
	DatabaseManager dm;
	float sessionID;
	User currUser;
	List<Event> events;
	
	public MapManager(float mSessionID, User mUser){
		currUser = mUser;
		sessionID = mSessionID;
		dm = new DatabaseManager();
		populateMap();
	}
	public void populateMap(){
		events = dm.requestEvents();
	}
}
