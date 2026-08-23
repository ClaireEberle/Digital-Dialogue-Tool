export default function Saved() {
  return <div>
    <div>
 <h1>Saved Dialogues</h1>
    </div>
   <div>
    <div id="saved" class="view">
    <div id="savedCenter">
      <table>
        <thead>
          <tr>
            <th>Dialogue</th>
            <th>Date saved</th>
            <th>Export as PDF</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="savedTable"></tbody>
      </table>
    </div>
  </div>
   </div>
    </div>;
}
