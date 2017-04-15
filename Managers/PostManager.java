package Managers;

public class PostManager { 
	User currUser;
	String title;
	String time;
	String location;
	String description;
	String category;
	String image;
	Date date;
	double coordinateX;
	double coordinateY;
	public PostManager( User mUser, Date mDate, double mX, double mY){
		currUser = mUser;
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
		Event newEvent = new Event(title, location, description, date, coordinateX, coordinateY, currUser);
		dm.addEvent(newEvent);
	}
	
}
