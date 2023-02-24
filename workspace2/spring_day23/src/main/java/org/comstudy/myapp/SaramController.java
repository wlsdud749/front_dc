package org.comstudy.myapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/saram")
public class SaramController {
	
	
	@RequestMapping("/list")
	public String saram() {
		
		System.out.println("SaramController의 saram() 메소드 호출");
		return "saram/list"; // WEB-INF/views/saram/list.jsp를 보여준다
	}//View name 반환
	
	@RequestMapping("/input")
	public String input() {
		
		System.out.println("SaramController의 input() 메소드 호출");
		return "saram/input"; // WEB-INF/views/saram/input.jsp를 보여준다
	}//View name 반환
}
