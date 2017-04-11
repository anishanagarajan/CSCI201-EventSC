package Message;

import java.util.ArrayList;

public class MapMessage extends Message {
	ArrayList<Integer> coordinatesX;
	ArrayList<Integer> coordinatesY;
	ArrayList<String> eventTitles;
	ArrayList<String> eventIDs;
	public MapMessage(ArrayList<Event> events){
		coordinatesX = new ArrayList<Integer>();
		coordinatesY = new ArrayList<Integer>();
		eventTitles = new ArrayList<String>();
		eventIDs = new ArrayList<String>();
		this.action = "MapMessage";
	}
	
}
