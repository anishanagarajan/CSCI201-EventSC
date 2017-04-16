package Server;
import Managers.*;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import Message.*;
public class RequestManager{
	String currentUser = "";
	
	public RequestManager(){
	}
	public void listen(HttpServletRequest request, HttpServletResponse response){
		BufferedReader br;
		PrintWriter pw=null;
		String st="";
		JsonObject receiveObj;
		Message sendMessage = null;
		try {
			br = request.getReader();
			pw = response.getWriter();
			st = br.readLine();
			receiveObj = new JsonParser().parse(st).getAsJsonObject();
			String requestType = receiveObj.get("requsetType").getAsString();
			switch(requestType){
			case "Login":
				LoginManager lm = new LoginManager(receiveObj.get("username").getAsString(), receiveObj.get("password").getAsString());
				LoginMessage tempLM= lm.login();
				sendMessage = tempLM;
				if(tempLM.ifSuccess){
					currentUser = receiveObj.get("username").getAsString();
				}
			case "SignUp":
				SignupManager sm = new SignupManager(receiveObj.get("username").getAsString(), receiveObj.get("password").getAsString(), receiveObj.get("fname").getAsString(),receiveObj.get("lname").getAsString());
				if(sm.signup()){
					sendMessage = new LoginMessage(true);
					currentUser = receiveObj.get("username").getAsString();
				}
				else{
					sendMessage = new LoginMessage(false);
				}
			case "Post":
				Date date = new Date(receiveObj.get("year").getAsInt(), receiveObj.get("month").getAsInt(),receiveObj.get("date").getAsInt(),receiveObj.get("hour").getAsInt(),receiveObj.get("min").getAsInt());
				PostManager postManager = new PostManager(currentUser, date, receiveObj.get("mX").getAsFloat(), receiveObj.get("mY").getAsFloat());
				//Need more
				
			case "Map":
				MapManager mapManager = new MapManager(currentUser);
				sendMessage = mapManager.populateMap();
				
			case "Search":
				SearchManager searchManager = new SearchManager(receiveObj.get("searchType").getAsString(), receiveObj.get("searchText").getAsString());
				sendMessage = searchManager.search();
			case "RequestEvent":
			case "Profile":
				ProfileManager profileManager = new ProfileManager(currentUser);
			}
			Gson gson = new Gson();
			String sendString = gson.toJson(sendMessage);
			response.setContentType("application/json");
			pw.print(sendString);
			pw.flush();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
	}

}
