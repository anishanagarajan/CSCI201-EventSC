package Managers;

import BaseClass.User;

public class SearchManager {
	User user;
	String searchParameter;
	String searchType;
	DatabaseManager dm;
	
	public SearchManager(String searchParameter, String searchType){
		this.searchParameter = searchParameter;
		this.searchType = searchType;		 
		dm = new DatabaseManager();
	}
	public ArrayList<Event> search(String searchType, String searchParameter){
		dm.search(searchType, searchParameter);
	}
}
