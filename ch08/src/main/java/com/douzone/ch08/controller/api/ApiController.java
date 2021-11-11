package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.controller.dto.JsonResult;
import com.douzone.ch08.controller.vo.GuestBookVO;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습</h1><p>HTML 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {
		GuestBookVO vo = new GuestBookVO();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return JsonResult.success(vo);
	}
	
}
