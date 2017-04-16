package Managers;

import java.util.ArrayList;

import BaseClass.Event;
import BaseClass.User;

public class SearchManager {
	User user;
	String searchParameter;
	String searchType;
	DatabaseManager dm;
	ArrayList<Event> resultEvents;

	public SearchManager(String searchType, String searchParameter) {
		this.searchParameter = searchParameter;
		this.searchType = searchType;
		dm = new DatabaseManager();
		resultEvents = new ArrayList<Event>();
	}

	public ArrayList<Event> search() {
		resultEvents = dm.search(searchType, searchParameter);
		return resultEvents;
	}
}
