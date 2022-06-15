import React from 'react'

const EntryForm =()=> {
    return (
        <section>
            <h1>Entry Form</h1>
            <form className="form entry-form" id="entryForm">
                <input type='text' placeholder='Title' className='title-entry' />
                <input type='text' placeholder='Band' className='band-entry' />
                <input type='text' placeholder='Artist Last' className='artist-last-entry' />
                <input type='text' placeholder='Artist First' className='artist-first-entry' />
                <input type='text' placeholder='Label' className='label-entry' />
                <input type='text' placeholder='Year' className='year-entry' />
                <input type='file' className='image-entry' accept='image/png, image/jpeg, image/jpg' />
                <input type='number' step='0.01' placeholder='price' className='price-entry' />
                <select id='comments' name='comments'>
                    <option value=''></option>
                    <option value='featured'>featured</option>
                    <option value='new'>new</option>
                    <option value='used'>used</option>
                </select>
            </form>
        </section>
    )
}

export default EntryForm