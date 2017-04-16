package Managers;

import java.util.ArrayList;

import BaseClass.Event;
import BaseClass.User;
import Message.SearchMessage;

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

	public SearchMessage search() {
		if (searchType.equals("user")) {
			resultEvents = dm.searchByUser(searchParameter);
		} else if (searchType.equals("event")) {
			resultEvents = dm.searchByEvent(searchParameter);
		}
		SearchMessage sm = new SearchMessage(resultEvents);
		return sm;
	}
}
