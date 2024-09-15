import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editHlsUrl, removeHlsUrl, addHlsUrl } from "../reducer/hlsReducer"; // Updated action imports
import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  small_mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
};
const Container = styled.div`
  margin: 20px;
  max-width: 600px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 10px;
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 5px;
    // margin: 5px 0 5px auto;
    // height: auto;
    // align-item: right;
    //  margin-right:-20px;
    //  margin-left: -20px;
    max-width: 320px;
  }
  @media (max-width: ${breakpoints.small_mobile}) {
    margin: 2px;
    max-width: 270px;
  }
`;
const UrlInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: black;
  font-color:black 
  
  @media (max-width: ${breakpoints.mobile}) {
    // flex-direction: column;
    // right: 10px;
    width: 300px;
    height: auto;
    align-items: flex-center;
    margin-left: 60px;
  }

  @media (max-width: ${breakpoints.small_mobile}) {
    width: 205px;
    height: auto;
    align-items: flex-center;
    margin-left: 60px;
  }
`;
const UrlInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
  color: black;
  margin-right: 10px;


  @media (max-width: ${breakpoints.mobile}) {
    align-items: flex-center;
    font-size: 14px;
    margin-right: 0px;
    margin-left: -3px;
    width: 250px;
    padding: 8px;
  }
  @media (max-width: ${breakpoints.small_mobile}) {
    align-items: flex-center;
    font-size: 14px;
    margin-left: -55px;
    margin-right: 0px;
    padding: 3px;
  }
`;
const ActionButton = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: #0056b3;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 30%;
    margin-left: 3px;
    font-size: 17px;
    padding: 6px;
  }
  @media (max-width: ${breakpoints.small_mobile}) {
    font-size: 12px;
    margin-left: 3px;
    width: 30%;
    padding: 6px;
  }
`;
const UrlList = styled.ul`
  list-style-type: none;
  padding: 0;



//   @media (max-width: ${breakpoints.mobile}) {
//     padding-left: 0px;
//   }
//   @media (max-width: ${breakpoints.small_mobile}) {
// padding-left:0px;
}
`;
const UrlListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  color: black;
  font-size: 10px;
  font-weight: 200;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;

  @media (max-width: ${breakpoints.tablet}) {
  width: 95%;
  justify-content: space-between;
 
}

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
c  }
  @media (max-width: ${breakpoints.small_mobile}) {
    // align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    padding: 5px;
    //  height:auto;
  }
`;
const UrlText = styled.p`
  margin: 0;
  word-wrap: break-word;
  max-width: 400px;
  flex-grow: 1;
  font-size:18px;
  
  @media (max-width: ${breakpoints.tablet}){
    max-width: 70%;
  font-size: 13px;
    text-align: left;
    margin-right:10px;

  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 70%;
    align-items:left;
 margin-right:-70px;
  font-size: 12px;
  text-align: left;

  }
  @media (max-width: ${breakpoints.small_mobile}) {
  max-width: 60%;
  margin-right:80px;
  font-size: 10px;
  text-align: left;

`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: flex-end;
    flex-direction: column;

}
  

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: flex-end;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.small_mobile}) {
    justify-content: flex-end;
    flex-direction: column;
  }
`;

const EditButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  color: #fff;
  background-color: #ffc107;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0a800;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: -20px;
    padding: 5px 10px;
  }
  @media (max-width: ${breakpoints.small_mobile}) {
    margin-left: -70px;
    padding: 3px 7px;
    // right:10px;
  }
`;
const RemoveButton = styled.button`
  padding: 5px 10px;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 5px;
    padding: 5px 10px;
  }
  @media (max-width: ${breakpoints.small_mobile}) {
    margin-left: -70px;
    padding: 3px 7px;
  }
`;

const AddMoreButton = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.small_mobile}) {
    width: 59%;
  }
`;
const Setting = () => {
  const dispatch = useDispatch();
  const hlsUrls = useSelector((state) => state.hls.urls);
  const [url, setUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newUrl, setNewUrl] = useState(hlsUrls[editIndex] || "");

  const handleAddUrl = (e) => {
    e.preventDefault();
    if (isEditing && editIndex !== null) {
      dispatch(editHlsUrl({ newUrl: url, index: editIndex }));
      setIsEditing(false);
      setEditIndex(null);
    } else {
      dispatch(addHlsUrl(url));
    }
    setUrl("");
  };
  const handleEdit = (index) => {
    dispatch(editHlsUrl({ index: editIndex, newUrl }));
    setIsEditing(true);
    setEditIndex(index);
    setUrl(hlsUrls[index]);
  };
  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };
  const handleRemove = (index) => {
    dispatch(removeHlsUrl(index));
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setUrl("");
    }
  };
  return (
    <Container>
      <UrlInputWrapper>
        <UrlInput
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter HLS URL"
        />
        <ActionButton
          onClick={handleAddUrl}
          // disabled={!url || hlsUrls.length >= 5}
          disabled={!url || (!isEditing && hlsUrls.length >= 5)} // Only disable if not editing and 5 URLs already exist
        >
          {isEditing ? "Update URL" : "Add URL"}
        </ActionButton>
      </UrlInputWrapper>
      {hlsUrls.length > 0 && (
        <UrlList>
          {hlsUrls.map((hlsUrl, index) => (
            <UrlListItem key={index}>
              <UrlText>{hlsUrl}</UrlText>
              <ButtonWrapper>
                <EditButton onClick={() => handleEdit(index)}>Edit</EditButton>
                <RemoveButton onClick={() => handleRemove(index)}>
                  Remove
                </RemoveButton>
              </ButtonWrapper>
            </UrlListItem>
          ))}
        </UrlList>
      )}

      {hlsUrls.length < 5 && (
        <AddMoreButton>Add More URLs ({hlsUrls.length}/5)</AddMoreButton>
      )}
    </Container>
  );
};
export default Setting;
