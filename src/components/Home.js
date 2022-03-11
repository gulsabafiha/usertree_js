import React, { useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';


const Home = () => {
    const [user,setUser]=useState([]);
    const data = [
        {'id': 1, 'left_child_id': 44, 'right_child_id': 46, 'username': 50, 'image': 'https://i.imgur.com/yzUDPMJ.png'}, 
        {'id': 2, 'left_child_id': 40, 'right_child_id': 47, 'username': 49, 'image': 'https://i.imgur.com/yzUDPMJ.png'}, 
        {'id': 3, 'left_child_id': 16, 'right_child_id': 46, 'username': 48, 'image': 'https://i.imgur.com/yzUDPMJ.png'}, 
        {'id': 4, 'left_child_id': 13, 'right_child_id': 31, 'username': 47, 'image': 'https://i.imgur.com/yzUDPMJ.png'}, 
        {'id': 5, 'left_child_id': 3, 'right_child_id': 9, 'username': 46, 'image': 'https://i.imgur.com/yzUDPMJ.png'}, 
        {'id': 6, 'left_child_id': 7, 'right_child_id': 13, 'username': 45, 'image': 'https://i.imgur.com/yzUDPMJ.png'}
    ]

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  
`;
  return (
    <div>
        <Tree
            lineWidth={'2px'}
            lineColor={'green'}
            lineBorderRadius={'10px'}
            label=
            {<StyledNode>
                <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                <p>User 1</p>
            </StyledNode>}>
            <TreeNode label={
                <StyledNode>
                    <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                    <p>User 2</p>
                </StyledNode>}>
                    <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 4</p>
                        </StyledNode>} >
                        <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 14</p>
                        </StyledNode>} 
                    />
                    <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 15</p>
                        </StyledNode>} 
                    />
                            </TreeNode>
                    <TreeNode label={
                    <StyledNode>
                        <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                        <p>User 16</p>
                    </StyledNode>} >
                    <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 18</p>
                        </StyledNode>} 
                    />
                    <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 9</p>
                        </StyledNode>} 
                    />
                        </TreeNode>
            </TreeNode>
            <TreeNode label={
                <StyledNode>
                    <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                    <p>User 3</p>
                </StyledNode>}>
                <TreeNode label={
                    <StyledNode>
                        <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                        <p>User 6</p>
                    </StyledNode>}>
                    <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 8</p>
                        </StyledNode>} 
                    />
                    <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 9</p>
                        </StyledNode>} 
                    />
                </TreeNode>
                <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 7</p>
                        </StyledNode>} 
                    >
                        <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 10</p>
                        </StyledNode>} 
                    />
                    <TreeNode label={
                        <StyledNode>
                            <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
                            <p>User 11</p>
                        </StyledNode>} 
                    />
                </TreeNode>
    </TreeNode>
   {/*  <TreeNode label={<StyledNode><p>User 3</p>
        <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
    </StyledNode>}>
      <TreeNode label={<StyledNode><p>User 6</p>
        <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
      </StyledNode>} />
      <TreeNode label={<StyledNode><p>User 7</p>
        <img src='https://i.imgur.com/yzUDPMJ.png' alt='' style={{width:'50px'}}/>
      </StyledNode>} />
    </TreeNode> */}
  </Tree>
  </div>
  )
}

export default Home