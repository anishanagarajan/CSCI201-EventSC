package Message;

import java.util.ArrayList;

import BaseClass.Event;

public class SearchMessage extends Message {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	ArrayList<String> eventTitles;
	ArrayList<String> posterNames;
	ArrayList<Integer> eventIDs;
	public SearchMessage(ArrayList<Event> events){
		eventTitles = new ArrayList<String> ();
		posterNames = new ArrayList<String> ();
		eventIDs = new ArrayList<Integer> ();
		this.action = "SearchMessage";
	}
}
