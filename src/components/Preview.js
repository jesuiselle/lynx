import React, {Fragment} from 'react';

const Preview = ({data, onPrevStep}) => {
    return (
        <div className="panel is-primary">
            <p className="panel-heading">You bring smiles to my face whatever You Meme...</p>
            <div className="panel-block is-block">
                <ul className="py-5">
                    {data.map((input, index) => (
                        <span key={index} className="py-2">
              {<Fragment> {input.value} </Fragment>}
            </span>
                    ))}
                </ul>
                <div>
                    <button type="button" onClick={onPrevStep}>Edit meme</button>
                    <button type="submit">Submit meme</button>
                </div>
            </div>
        </div>
    );
}

export default Preview;