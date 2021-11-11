package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
		
		return JsonResult.success(vo); // XmlResult 말고 JsonResult
	}
	
	// --------------------- json
	@ResponseBody
	@RequestMapping(value="/json", method=RequestMethod.GET)
	public Object json() {
		GuestBookVO vo = new GuestBookVO();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post01", method = RequestMethod.POST) 
	public Object post01(GuestBookVO vo) {
		// service -> repository : db insert 성공한 후,
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post02", method = RequestMethod.POST) 
	public Object post02(@RequestBody GuestBookVO vo) { // json 폼에서 넘어오는 것을 자바 객체로 변환
		// service -> repository : db insert 성공한 후,
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
}
