
public class PostManager {
	float sessionID;
	User currUser;
	String title;
	String time;
	String location;
	String description;
	String category;
	String image;

	public PostManager(float mSessionID, User mUser){
		currUser = mUser;
		sessionID = mSessionID;
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
	}
	
}
