
public class LoginManager {
	DatabaseManager dm;
	String username;
	String password;
	
	public LoginManager(String mUsername, String mPassword){
		dm = new DatabaseManager();
		username = mUsername;
		password = mPassword;
		login();
	}
	public boolean login(){
		boolean success = false;
		/*add code here*/
		success = dm.checkLoginValidation(username, password);
		return success;
	}
	 
}
