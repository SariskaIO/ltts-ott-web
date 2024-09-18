import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editHlsUrl, removeHlsUrl, addHlsUrl } from "../reducer/hlsReducer"; // Updated action imports
import styled from "styled-components";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { color, margin } from "@mui/system";

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
    max-width: 400px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 5px;
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
    display:flex;
    width: 300px;
    height: auto;
    align-items: flex-center;
    margin-left: 60px;
  }

  @media (max-width: ${breakpoints.small_mobile}) {
   display:flex;
   width: 205px;
    height: auto;
    align-items: flex-center;
    margin-left: 60px;
  }
`;
const UrlInput = styled.input`
  padding: 10px;
  font-size: 16px;
  background-color:#d7d4dd;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
  color: black;
  margin-right: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    //  align-items: flex-center;
       padding: 8px;
      font-size: 13px;
      border: 2px solid #ccc;
      border-radius:5px;
      flex:1;
      margin-right: 10px;
      // margin-left: -3px;
      // width: 250px;
  }
  @media (max-width: ${breakpoints.small_mobile}) {
    // align-items: flex-center;
        padding:5px 5px;
        flex:1;
    font-size: 14px;
    border-radius:5px;
    margin-left: -55px;
    margin-right: 10px;
  }
`;
const ActionButton = styled.button`
  padding: 11px 16px;
  font-size: 14px;
  color: white;
  background-color: #741E71;
;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: #50154E;
  }
  @media (max-width: ${breakpoints.mobile}) {
    // width: 30%;
    margin-left: 3px;
    font-size: 13px;
    padding:10px 15px;
    border-radius:5px;
  }
  @media (max-width: ${breakpoints.small_mobile}) {
    font-size: 11px;
    margin-left: 3px;
    width: 30%;
    padding:9px 7px;
    border-radius:5px;

  }
`;
const UrlList = styled.ul`
  list-style-type: none;
   padding: 3px;


//   @media (max-width: ${breakpoints.mobile}) {
//     padding-left: 0px;
//   }
//   @media (max-width: ${breakpoints.small_mobile}) {
// padding-left:0px;
}
`;
const UrlListItem = styled.li`
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color:#d7d4dd;
  color: black;
  font-size:10px;
  font-weight: 400;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
    text-align: left; /* Align the text to the left */




  @media (max-width: ${breakpoints.tablet}) {
  width: 400;
  justify-content: space-between;
 
}

  @media (max-width: ${breakpoints.mobile}) {
    display:flex;
    width:93%;
    justify-content: space-between;
    align-items: center;
  font-size:8px;
  margin-bottom:10px;
  padding:10px;
  border-radius:5px;
    // width: 95%;
 }
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
  display: inline-block; /* Use inline-block for left alignment */
  text-align: left; /* Align the text to the left */
  margin: 0;
  word-wrap: break-word;
  max-width: 250px;
  flex-grow: 1;
  font-size:14px;
  align-items:right;
  margin-right:10px;v
  
  @media (max-width: ${breakpoints.tablet}){
    max-width: 70%;
  font-size: 13px;
    text-align: left;
    margin-right:10px;

  }

  @media (max-width: ${breakpoints.mobile}) {
     max-width: 70%;
    align-items:left;
//  margin-right:-70px;
   margin-right:40px;
  font-size: 12px;
  text-align: left;

  }
  @media (max-width: ${breakpoints.small_mobile}) {
  max-width: 60%;
  margin-right:40px;
  font-size: 10px;
  text-align: left;

`;

const ButtonWrapper = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between; 


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

const IconButtonWrapper = styled(IconButton)`
  padding: 8px; // Adjust padding to fit the icon size and background
  margin-bottom: 0;
   margin-top: 2px;
   background-color: #7f0000; // Light gray background color
   border-radius: 50%; // Round background
    margin-right: 10px;
    color:#fff;
  
  &:hover {
  icon-color:#3b2244;
      background-color:#3b2244; // Slightly darker gray on hover
    color:#fff;
  }

   @media (max-width: ${breakpoints.mobile}) {
    width: 30px; // Reduce width for mobile
    height: 30px; // Reduce height for mobile
    padding: 4px; // Adjust padding to make the icon smaller
    border-radius: 50%; // Ensure it's still round
  }

`;
// const EditButton = styled.button`
//   margin-right: 10px;
//   padding: 5px 10px;
//   color: #fff;
//   background-color:#dab2c1;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #259ad7;
//   }
//     @media (max-width: ${breakpoints.tablet}) {
//         margin-left: -15px;
//         padding: 5px 10px;

// }
//   @media (max-width: ${breakpoints.mobile}) {
//     margin-left: -20px;
//     padding: 5px 10px;
//   }
//   @media (max-width: ${breakpoints.small_mobile}) {
//     margin-left: -88px;
//     padding: 3px 7px;
//     // right:10px;
//   }
// `;
// const RemoveButton = styled.button`
//   padding: 5px 10px;
//   color: #fff;
//   background-color: #ba0f30;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #7f0000;
//   }
//   @media (max-width: ${breakpoints.mobile}) {
//     margin-right: 5px;
//     padding: 5px 10px;
//   }
//   @media (max-width: ${breakpoints.small_mobile}) {
//     margin-left: -70px;
//     padding: 3px 7px;
//   }
// `;

const AddMoreButton = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  color: #fff;
  background-color: #741E71;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #50154E;
  }
  @media (max-width: ${breakpoints.mobile}) {
    // width: 50%;
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
    // dispatch(editHlsUrl({ index: editIndex, newUrl }));
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
<Tooltip 
  title="Edit" 
  placement="top"
  PopperProps={{
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, -10], 
        },
      },
    ],
  }}
  componentsProps={{
    tooltip: {
      sx: {
        backgroundColor: '#50154E', 
        color: 'white', 
        fontSize: '12px', 
      },
    },
    arrow: {
      sx: {
        color: '#16488f', 
      },
    },
  }}
>
  <IconButtonWrapper 
    onClick={() => handleEdit(index)}
    sx={{
      color: 'white', 
      backgroundColor: "#741E71", 
      "&:hover": {
        backgroundColor: "#50154E", 
      },
      right: "2px", 
      bottom:"2px"
    }}
  >
    <EditIcon />
  </IconButtonWrapper>
</Tooltip>

<Tooltip 
  title="Remove" 
  placement="top"
  PopperProps={{
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, -10], 
        },
      },
    ],
  }}
  componentsProps={{
    tooltip: {
      sx: {
        backgroundColor: '#50154E',
        color: 'white',
        fontSize: '12px',
      },
    },
    arrow: {
      sx: {
        color: '#071125', 
      },
    },
  }}
>
  <IconButtonWrapper 
    onClick={() => handleRemove(index)}
    sx={{
      color: "white", // White icon color
      backgroundColor: "#741E71", // Background color for the button
      "&:hover": {
        backgroundColor: "#970c10", // Darker red on hover
      },
    }}
  >
    <DeleteIcon />
  </IconButtonWrapper>
</Tooltip>

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
