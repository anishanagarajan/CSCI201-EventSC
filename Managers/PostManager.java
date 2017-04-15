package Managers;

public class PostManager {
	float sessionID;
	User currUser;
	String title;
	String time;
	String location;
	String description;
	String category;
	String image;
	int eventID;
	Date date;
	int coordinateX;
	int coordinateY;
	public PostManager(float mSessionID, User mUser, int mEventID, Date mDate, int mX, int mY){
		currUser = mUser;
		sessionID = mSessionID;
		eventID = mEventID;
		date = mDate;
		coordinateX = mX;
		coordinateY = mY;
	}
	public void setTitle(String mTitle){
		title = mTitle;
	}
	public void setTime(String mTime){
		time = mTime;
	}
	public void setLocation(String mLocation){
		location = mLocation;
	}
	public void setDescription(String mDescription){
		description = mDescription;
	}
	public void setCategory(String mCategory){
		category = mCategory;
	}
	public void setImage(String mImage){
		image = mImage;
	}
	public void post(){
		/*add code here*/
		Event newEvent = new Event(eventID, title, location, description, date, coordinateX, coordinateY, currUser);
		dm.addEvent(newEvent);
	}
	
}
