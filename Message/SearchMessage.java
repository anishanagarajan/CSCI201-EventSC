package Message;

import java.util.ArrayList;

public class SearchMessage extends Message {
	ArrayList<String> eventTitles;
	ArrayList<String> posterNames;
	ArrayList<String> eventIDs;
	public SearchMessage(ArrayList<Event> events){
		eventTitles = new ArrayList<String> ();
		posterNames = new ArrayList<String> ();
		eventIDs = new ArrayList<String> ();
		this.action = "SearchMessage";
	}
}
