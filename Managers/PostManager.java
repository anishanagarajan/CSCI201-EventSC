package Managers;

public class PostManager { 
	User currUser;
	String title;
	 
	String location;
	String description;
	String category;
	String image;
	Date date;
	float coordinateX;
	float coordinateY;
	public PostManager( User mUser, Date mDate, float mX, float mY){
		currUser = mUser;
		date = mDate;
		coordinateX = mX;
		coordinateY = mY;
	}
	public void setTitle(String mTitle){
		title = mTitle;
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
