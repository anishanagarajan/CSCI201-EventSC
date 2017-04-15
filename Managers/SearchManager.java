package Managers;

import BaseClass.User;

public class SearchManager {
	float sessionID;
	User user;
	String searchParameter;
	String username;
	DatabaseManager dm;
	
	public SearchManager(float mSessionID, String mUsername){
		username = mUsername;
		user = dm.getUser(username);
		sessionID = mSessionID;
		dm = new DatabaseManager();
	}
	public void setSearchParameter(String mSearchParameter){
		searchParameter = mSearchParameter;
	}
	public String searchResult(){
		String searchResults="";
		/*add code here*/
		dm.getSearchEvents(searchParameter);
		return searchResults;
	}
}
