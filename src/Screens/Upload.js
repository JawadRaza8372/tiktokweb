import React,{useState} from 'react'

function Upload() {
    const [design, setdesign] = useState(null)
    return (
        <div className="middle">
           {(!design) && <form className="mydiv">
<h3 style={{textAlign:"center",textDecoration:"underline",marginBottom:'30px'}}>Upload</h3>

<div className="input-group mb-1">
  <input type="file" className="form-control mycolor" accept="video/*"  onChange={""} />
</div>
  <p style={{marginBottom:'30px'}}> (Preview will confirm either your video has been fetched or not)</p>
<button className="followbutton">Next</button>
            </form>}
            {(design) && <form className="mydiv">
            <h3 style={{textAlign:"center",textDecoration:"underline",marginBottom:'30px'}}>Upload</h3>

<div className="input-group mb-1">
  <input type="text" className="form-control mycolor" placeholder="Video Description"  accept="video/*"  onChange={""} />
</div>
<button className="followbutton">Upload</button>
            </form>}

        </div>
    )
}

export default Upload
