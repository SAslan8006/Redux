import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData, setText, setIsHtml } from '../action/actions';
import '../App.css';

function Index() {
  const { data, text, isHtml } = useSelector(state => state);
  const dispatch = useDispatch();

  // Kullanıcı girdisine ve HTML formatı seçimine bağlı olarak apiUrl'i güncelle
  const apiUrl = `https://baconipsum.com/api/?type=all-meat&paras=${text}&format=${isHtml ? 'html' : 'text'}`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => isHtml ? response.text() : response.text())
      .then(fetchedData => {
        dispatch(setData(fetchedData));
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [text, isHtml, apiUrl, dispatch]);

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>
        React sample text generator app
      </h1>
      <hr />
      <div className="ort" style={{ marginLeft: "750px", color: "white" }}>
        <h2>Paragraphs: </h2>
        <input
          type="number"
          id="paragraphs"
          min="1"
          value={text}
          max="10"
          onChange={(e) => dispatch(setText(e.target.value))}
        />
      </div>
      <div
        className="ort2"
        style={{ marginLeft: "950px", color: "white", marginTop: "-89px" }}
      >
        <h2>Include HTML: </h2>
        <input
          type="checkbox"
          id="html"
          checked={isHtml}
          onChange={(e) => dispatch(setIsHtml(e.target.checked))}
        />
      </div>
      <br />
      <br /><div className='area'>
      <textarea
        style={{
          width: "800px",
          height: "250px",
          border: "2px",
          borderColor: "white",
          backgroundColor: "#303030",
          borderRadius: "10px",

          color: "white",
        }}
        
        value={typeof data === 'string' ? data : JSON.stringify(data, null, 2)}
        placeholder="Buraya yazın"
        disabled
      ></textarea>
      </div>
    </div>
  );
}

export default Index;
