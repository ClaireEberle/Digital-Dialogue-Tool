export default function NewDialogue() {
  return <div>
    <div>
 <h1>New Dialogue Title</h1>
    </div>
   <div>
   <div id="inputArea">
      <textarea id="textInput" placeholder="Write here…"></textarea>
      <div id="controlsRow">
        <input id="tagInput" maxlength="3" placeholder="ID" />
        <select id="mode">
          <option>Share</option>
          <option>Reply</option>
          <option>Ask a question</option>
          <option>Summarize</option>
          <option>What is this feeling?</option>
        </select>
        <button id="attachBtn">Attach File</button>
        <button id="addBtn">Add</button>
      </div>
    </div>
  </div>
   </div>
}
