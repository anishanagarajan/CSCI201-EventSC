package Managers;

import BaseClass.Event;
import BaseClass.User;

public class AttendManager {
	User user;
	Event event;
	DatabaseManager dm;

	public AttendManager(User user, Event event) {
		dm = new DatabaseManager();
		this.user = user;
		this.event = event;
	}

	public void attend() {
		dm.attendEvent(user, event);
	}

}
