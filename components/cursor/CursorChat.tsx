import CursorSVG from "@/public/assets/CursorSVG";
import { CursorChatProps, CursorMode } from "@/types/type";
import React from "react";

const CursorChat = ({
  cursor,
  cursorState,
  setCursorState,
  updateMyPresence,
}: CursorChatProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      updateMyPresence({ message: e.target.value });
      setCursorState({
        mode: CursorMode.Chat,
        previousMessage: null,
        message: e.target.value,
      });
    } catch (error) {
      throw new Error("Não foi possível alterar o state de comentário");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.key === "Enter") {
        setCursorState({
          mode: CursorMode.Chat,
          // teste
          previousMessage: null,
          message: "",
        });
      } else {
        if (e.key == "Escape") {
          setCursorState({
            mode: CursorMode.Hidden
          });
        }
      }
    } catch (error) {
      throw new Error("Não foi possível alterar o state de comentário");
    }
  };

  return (
    <div
      className="absolute top-0 left-0"
      style={{
        transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`,
      }}
    >
      {cursorState.mode === CursorMode.Chat && (
        <>
          <CursorSVG color="#000" />

          <div className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]" onKeyUp={(e) => e.stopPropagation()}>
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )}
            <input
              className="z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none"
              autoFocus={true}
              onChange={handleChange}
              autoComplete="off"
              onKeyDown={handleKeyDown}
              placeholder={cursorState.previousMessage ? "" : "Digite algo"}
              value={cursorState.message}
              maxLength={50}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CursorChat;
