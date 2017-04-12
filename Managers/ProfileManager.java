
public class ProfileManager {
	DatabaseManager dm;
	float sessionID;
	String username;
	User user;
	List<Event> myEvents;
	List<Event> pastEvents;
	List<Event> upcomingEvents;
	
	public ProfileManager(float mSessionID, String mUsername){
		username = mUsername;
		sessionID = mSessionID;
		dm = new DatabaseManager();
		user = dm.getUserInfo(username);
		displayUserInfo();
	}
	public String displayUserInfo(){
		String userInfo = "";
		String fname = user.getFname();
		String lname = user.getLname();
		String org = user.getOrg();
		String pic = user.getPic();
		/*add code here*/
		return userInfo;
	}
	public String yourEvents(){
		String yourEvents="";
		myEvents = dm.getMyEvents(username);
		/*add code here*/
		return yourEvents;
	}
	public String pastEvents(){
		String pastEvents="";
		pastEvents = dm.getPastEvents(username);
		/*add code here*/
		return pastEvents;
	}
	public String upcomingEvents(){
		String upcomingEvents="";
		upcomingEvents = dm.getUpcomingEvents(username);
		/*add code here*/
		return upcomingEvents;
	}
	

}
