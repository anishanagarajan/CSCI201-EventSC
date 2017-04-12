import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class DatabaseManager {

	private Connection conn;
	private Statement st;
	private ResultSet rs;

	public DatabaseManager() {
		// connect with database
		conn = null;
		// write SQL code
		st = null;
		// storing data return from select, table is return from selete
		rs = null;
	}

	public boolean checkLoginValidation(String username, String password) {
		try {
			// dyanamically load a class at runtime
			Class.forName("com.mysql.jdbc.Driver");
			// connect with the driver
			conn = DriverManager.getConnection("jdbc:mysql://localhost/EventSC?user=root&password=root&useSSL=false");
			st = conn.createStatement();
			// mysql Select statement
			rs = st.executeQuery("SELECT password FROM UserTable WHERE username='" + username + "';");
			String passwordData = null;
			while (rs.next()) {
				passwordData = rs.getString("password");
			}
			if (passwordData == null) {
				return false;
			} else if (passwordData.equals(password)) {
				return true;
			}
		} catch (SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		} catch (ClassNotFoundException cnfe) {
			System.out.println("cnfe: " + cnfe.getMessage());
		} finally {
			// always close connection to database
			try {
				if (rs != null) {
					rs.close();
				}
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle closing: " + sqle.getMessage());
			}
		}
		return false;
	}

	public List<Event> requestEvents() {
		try {
			// dyanamically load a class at runtime
			Class.forName("com.mysql.jdbc.Driver");
			// connect with the driver
			conn = DriverManager.getConnection("jdbc:mysql://localhost/EventSC?user=root&password=root&useSSL=false");
			st = conn.createStatement();
			// mysql Select statement
			rs = st.executeQuery("SELECT * FROM EventTable;");

			List<Event> events = new List();
			while (rs.next()) {
				int eventID = rs.getInt("eventID");
				String title = rs.getString("title");
				String location = rs.getString("location");
				String description = rs.getString("description");
				String dateString = rs.getString("dateEvent");
				// parse date data
				SimpleDateFormat formatter = new SimpleDateFormat("MM.dd.yyyy HH:mm:ss");
				Date date = formatter.parse(dateString);
				int coordinateX = rs.getInt("coordinateX");
				int coordinateY = rs.getInt("coordinateY");
				String poster = rs.getString("poster");
				Event event = new Event(eventID, title, location, description, date, coordinateX, coordinateY, poster);
				events.add(event);
			}
			return events;
		} catch (SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		} catch (ClassNotFoundException cnfe) {
			System.out.println("cnfe: " + cnfe.getMessage());
		} finally {
			// always close connection to database
			try {
				if (rs != null) {
					rs.close();
				}
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle closing: " + sqle.getMessage());
			}
		}
	}

	public void addEvent(Event newEvent) {
		PreparedStatement preparedStmt = null;
		String title = newEvent.getTitle();
		String location = newEvent.getLocation();
		String description = newEvent.getDescription();
		Date date = newEvent.getdate();
		SimpleDateFormat formatter = new SimpleDateFormat("MM.dd.yyyy HH:mm:ss");
		String dateString = formatter.format(date);
		int coordinateX = newEvent.getCoordinateX();
		int coordinateY = newEvent.getCoordinateY();
		String poster = newEvent.getPoster();
		try {
			// dyanamically load a class at runtime
			Class.forName("com.mysql.jdbc.Driver");
			// connect with the driver
			conn = DriverManager.getConnection("jdbc:mysql://localhost/EventSC?user=root&password=root&useSSL=false");
			// create the mysql insert statement
			String query = "INSERT INTO EventTable (title, location, description, date, coordinateX, coordianteY, poster)"
					+ "VALUES (?, ?, ?, ?, ?, ?, ?)";
			// create the insert preparedstatement
			preparedStmt = conn.prepareStatement(query);

			preparedStmt.setString(1, title);
			preparedStmt.setString(2, location);
			preparedStmt.setString(3, description);
			preparedStmt.setString(4, dateString);
			preparedStmt.setInt(5, coordinateX);
			preparedStmt.setInt(6, coordinateY);
			preparedStmt.setString(7, poster);

			preparedStmt.executeUpdate();

		} catch (SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		} catch (ClassNotFoundException cnfe) {
			System.out.println("cnfe: " + cnfe.getMessage());
		} finally {
			// always close connection to database
			try {
				if (preparedStmt != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle closing: " + sqle.getMessage());
			}
		}
	}

	public List<Event> getMyEvents(String username, String when) {
		try {
			// dyanamically load a class at runtime
			Class.forName("com.mysql.jdbc.Driver");
			// connect with the driver
			conn = DriverManager.getConnection("jdbc:mysql://localhost/EventSC?user=root&password=root&useSSL=false");
			st = conn.createStatement();
			// mysql Select statement
			rs = st.executeQuery("SELECT userID FROM UserTable WHERE username='" + username + "';");

			// get the userID from the username
			int userID;
			while (rs.next()) {
				userID = rs.getInt("userID");
			}

			// get the list of eventID from certain table
			if (when.equals("past")) {
				rs = st.executeQuery("SELECT eventID FROM User_PreviousEvent WHERE userID='" + userID + "';");
			} else if (when.equals("present")) {
				rs = st.executeQuery("SELECT eventID FROM User_Event WHERE userID='" + userID + "';");
			} else {
				rs = st.executeQuery("SELECT eventID FROM User_UpcomingEvent WHERE userID='" + userID + "';");
			}
			List<Event> events;
			while (rs.next()) {
				Statement st2;
				ResultSet rs2;
				rs2 = st2.executeQuery("SELECT * FROM Event_Table WHERE eventID='" + rs.getInt("eventID") + "';");
				while (rs2.next()) {
					int eventID = rs.getInt("eventID");
					String title = rs.getString("title");
					String location = rs.getString("location");
					String description = rs.getString("description");
					String dateString = rs.getString("dateEvent");
					// parse date data
					SimpleDateFormat formatter = new SimpleDateFormat("MM.dd.yyyy HH:mm:ss");
					Date date = formatter.parse(dateString);
					int coordinateX = rs.getInt("coordinateX");
					int coordinateY = rs.getInt("coordinateY");
					String poster = rs.getString("poster");
					Event event = new Event(eventID, title, location, description, date, coordinateX, coordinateY,
							poster);
					events.add(event);
				}
			}

			return events;
		} catch (SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		} catch (ClassNotFoundException cnfe) {
			System.out.println("cnfe: " + cnfe.getMessage());
		} finally {
			// always close connection to database
			try {
				if (rs != null) {
					rs.close();
				}
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle closing: " + sqle.getMessage());
			}
		}
	}
}
