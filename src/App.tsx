/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'
import './global.css'
import Switch from "react-switch";
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CardProduct from './components/CardProduct';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<any>({})
  const [cardData, setCardData] = useState<any>([])

  const categories = [
    'Cocktail',
    'Shooters',
    'Premium Spirits',
    'Non-Alcoholic Beverages'
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (e: any, inputName: any) => {
    setData({
      ...data,
      [inputName]: e?.target?.value || e 
    }) 
  }

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault() 
    if (!data.description || !data.price || !data.image) {
      alert("Required data must be fulfilled")
    } else {
      setCardData([
        ...cardData,
        data
      ]) 
      setIsOpen(!isOpen)
    }
  }, [cardData, data])

  const handleClickFile = () => {
    document.getElementById('image')?.click()
  }

  return (
    <>
      <Header/>
      <div className='content-wrapper'>
        <div className="flex">
          <SearchBar/>
          <div className="btn-import-wrapper flex">
            <div className="btn flex btn-import">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 13.3334C3.5 13.0572 3.72386 12.8334 4 12.8334L12 12.8334C12.2761 12.8334 12.5 13.0572 12.5 13.3334C12.5 13.6095 12.2761 13.8334 12 13.8334L4 13.8334C3.72386 13.8334 3.5 13.6095 3.5 13.3334Z" fill="#FCFCFC"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64644 2.31307C7.8417 2.11781 8.15828 2.11781 8.35354 2.31307L10.6869 4.64641C10.8821 4.84167 10.8821 5.15825 10.6869 5.35351C10.4916 5.54877 10.175 5.54877 9.97977 5.35351L8.49999 3.87373V10.6666C8.49999 10.9428 8.27613 11.1666 7.99999 11.1666C7.72385 11.1666 7.49999 10.9428 7.49999 10.6666V3.87373L6.02021 5.35351C5.82495 5.54877 5.50837 5.54877 5.3131 5.35351C5.11784 5.15825 5.11784 4.84167 5.3131 4.64641L7.64644 2.31307Z" fill="#FCFCFC"/>
                </svg>
              </div>
              <p>Import</p>
            </div>
          </div>
        </div>
        <div className="flex category-wrapper">
          <div className="badge badge-none">
            Category
          </div>
          {
            categories.map((category: string) => <div className="badge">
            {category}
          </div>)
          }
          
          <div className="badge badge-none btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1801 7.95383C18.0751 7.05888 18.0751 5.60787 17.1801 4.71292L16.0016 3.53441C15.1066 2.63946 13.6556 2.63946 12.7607 3.53441L3.51431 12.7808C3.1338 13.1613 2.89934 13.6636 2.85198 14.1996L2.65025 16.4833C2.57037 17.3875 3.32706 18.1441 4.23125 18.0643L6.51493 17.8625C7.05095 17.8152 7.55322 17.5807 7.93372 17.2002L17.1801 7.95383ZM16.2962 5.5968C16.703 6.0036 16.703 6.66315 16.2962 7.06994L15.5048 7.86133L12.8532 5.20968L13.6446 4.41829C14.0514 4.0115 14.7109 4.0115 15.1177 4.41829L16.2962 5.5968ZM11.9693 6.09356L14.6209 8.74521L7.04984 16.3163C6.87688 16.4893 6.64858 16.5959 6.40493 16.6174L4.12125 16.8191C3.99208 16.8305 3.88399 16.7224 3.8954 16.5933L4.09713 14.3096C4.11866 14.0659 4.22523 13.8376 4.39819 13.6647L11.9693 6.09356Z" fill="#FCFCFC"/>
            </svg>
          </div>
        </div>
        <div className="flex product-lists">
          {
            cardData.map((dt: any, i: number) => {
              return <CardProduct data={dt} key={i}/>
            })
          }
          <div className="card card-add" onClick={handleModal}>
              <div className="flex flex-column add-icon">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" fill="#FCFCFC"/>
                  </svg>
                </div>
                <p>Add Product</p>
              </div>
          </div>
          
        </div>
      </div>
      <Footer/>
      {
        isOpen && 
        <div id="demo-modal" className="modal">
            <div className="modal__content">
                <h1>Add Menu</h1>
                <div className='mr-20'>
                  <form>
                    <div className="flex gap-40 mt-20">
                      <div className='input-wrapper'>
                        <label>
                          Your product name
                        </label>
                        <input type='text' className='input-field' placeholder='Product name' onChange={(e) => {handleChange(e, 'name')}}/>
                      </div>
                      <div className='input-wrapper'>
                        <label>
                          Menu code
                        </label>
                        <input type='text' className='input-field' placeholder='menu code'/>
                      </div>
                    </div>
                    <div className='input-wrapper mt-20'>
                        <label>
                          Category
                        </label>
                        <select className='select-field' placeholder='Select category' onChange={(e) => {handleChange(e, 'category')}}>
                          <option value="">Select category</option>
                          {
                            categories.map((category: any) => <option value={category} style={{color: '#000'}}>{category}</option>)
                          }
                        </select>
                    </div>
                    <div className='input-wrapper mt-20'>
                        <label>
                        Tell me more about your product <span className="required">*</span>
                        </label>
                        <textarea className='textare-field' rows={4} placeholder='Product description' onChange={(e) => {handleChange(e, 'description')}}></textarea>
                    </div>
                    <div className="flex gap-40 mt-20">
                      <div className='input-wrapper'>
                        <label>
                          Price <span className="required">*</span>
                        </label>
                        <div className="prepend-field flex">
                          <div className='nt-prepend flex'>
                            <p>NT$</p>
                          </div>
                          <input type="text" className='input-field-prepend' placeholder='price' onChange={(e) => {handleChange(e, 'price')}}/>
                        </div>
                      </div>
                      <div className='input-wrapper'>
                        <label>
                          Discount price (optional)
                        </label>
                        <div className="prepend-field flex">
                          <div className='nt-prepend flex'>
                            <p>NT$</p>
                          </div>
                          <input type="text" className='input-field-prepend' placeholder='Discounted price' onChange={(e) => {handleChange(e, 'discount')}}/>
                        </div>
                      </div>
                    </div>
                      <div className='input-wrapper mt-20'>
                        <label>
                          Image <span className="required">*</span>
                        </label>
                        <div className="input-field flex file-picker" onClick={handleClickFile}>
                          <p className='m-0'>
                            {data?.image || 'Select File'}
                          </p>
                          <div className="upload-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 17.1667C4.375 16.8215 4.65482 16.5417 5 16.5417L15 16.5417C15.3452 16.5417 15.625 16.8215 15.625 17.1667C15.625 17.5118 15.3452 17.7917 15 17.7917L5 17.7917C4.65482 17.7917 4.375 17.5118 4.375 17.1667Z" fill="#AB5CFA"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.55805 3.39139C9.80213 3.14731 10.1979 3.14731 10.4419 3.39139L13.3586 6.30805C13.6027 6.55213 13.6027 6.94786 13.3586 7.19194C13.1145 7.43601 12.7188 7.43601 12.4747 7.19194L10.625 5.34221V13.8333C10.625 14.1785 10.3452 14.4583 9.99999 14.4583C9.65482 14.4583 9.37499 14.1785 9.37499 13.8333V5.34221L7.52527 7.19194C7.28119 7.43601 6.88546 7.43601 6.64139 7.19194C6.39731 6.94786 6.39731 6.55213 6.64139 6.30805L9.55805 3.39139Z" fill="#AB5CFA"/>
                            </svg>
                          </div>
                        </div>
                        <input type='file' id="image" onChange={(e:any) => { 
                          const file = e.target.files[0]
                          if (file) {
                            setData({ ...data, image: URL.createObjectURL(file) })
                          }
                        }} className='input-field hidden' placeholder='Select File'/>
                      </div>
                      <div className='input-wrapper mt-20 flex flex-row'>
                        <label>
                          Enabled Variant
                        </label>
                        <Switch onChange={(e) => {handleChange(e, 'enabledVariant')}} checked={data?.enabledVariant || false} uncheckedIcon={false} checkedIcon={false} height={16} width={32} handleDiameter={18}/>
                      </div>
                    <div className="submit-btn mt-20 mb-30">
                      <button onClick={handleSubmit}>
                        Add Product
                      </button>
                    </div>
                  </form>
                </div>

                <div onClick={handleModal} className="modal__close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.22703 6.72703C6.51992 6.43414 6.99479 6.43414 7.28769 6.72703L12 11.4393L16.7123 6.72703C17.0052 6.43414 17.4801 6.43414 17.773 6.72703C18.0659 7.01992 18.0659 7.4948 17.773 7.78769L13.0607 12.5L17.773 17.2123C18.0659 17.5052 18.0659 17.9801 17.773 18.273C17.4801 18.5659 17.0052 18.5659 16.7123 18.273L12 13.5607L7.28769 18.273C6.99479 18.5659 6.51992 18.5659 6.22703 18.273C5.93413 17.9801 5.93413 17.5052 6.22703 17.2123L10.9393 12.5L6.22703 7.78769C5.93413 7.4948 5.93413 7.01992 6.22703 6.72703Z" fill="#FCFCFC"/>
                  </svg>
                </div>
            </div>
        </div>
      }
    </>
  )
}

export default App
