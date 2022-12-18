package com.version2.web.Service;

import java.util.HashMap;
import java.util.List;

import com.version2.web.vo.dto.BoardDto;

public interface BoardService {
    public void write(BoardDto board);

    public void modify(BoardDto board);

    public void remove(int num);

    public BoardDto getBoard(int num);

    public List<BoardDto> getBoardList();

    public List<BoardDto> getBoardSearchList(HashMap<String, Object> params);
}