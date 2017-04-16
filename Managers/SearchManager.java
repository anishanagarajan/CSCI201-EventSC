package Managers;

import BaseClass.Event;
import BaseClass.User;

public class SearchManager {
	User user;
	String searchParameter;
	String searchType;
	DatabaseManager dm;
	ArrayList<Event> resultEvents;
	
	public SearchManager(String searchParameter, String searchType){
		this.searchParameter = searchParameter;
		this.searchType = searchType;		 
		dm = new DatabaseManager();
		resultEvents = new ArrayList<Event>();
	}
	public ArrayList<Event> search(String searchType, String searchParameter){
		resultEvents = dm.search(searchType, searchParameter);
		SearchMessage = new SearchMessage(resultsEvents);
		/*add code here to pass to front end*/
		return resultEvents;
	}
}
