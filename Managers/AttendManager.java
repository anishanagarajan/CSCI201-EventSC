package Managers;

public class AttendManager { 
	User user;
	Event event;
	 
	public AttendManager(User user, Event event){
		this.user = user;
		this.event = event;
	}
	 
	public void attend(){
		dm.attendEvent(event,user);
	}
	
}