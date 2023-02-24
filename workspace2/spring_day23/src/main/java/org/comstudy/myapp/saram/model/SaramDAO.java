package org.comstudy.myapp.saram.model;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

// 클래스 선언 및 빈 등록
@Repository // 자동으로 등록
public class SaramDAO {

	public ArrayList<SaramDTO> selectAll() {
		System.out.println("selectALL() 호출 됨!");
		return null;
	}
}
