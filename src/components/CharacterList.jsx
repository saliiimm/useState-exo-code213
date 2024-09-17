import React from 'react';
import CharacterBox from './CharacterBox';
const CharacterList = ({
  list,
  editingId,
  handleSaveClick,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <ul>
      {list.map((character) => (
        <CharacterBox
          key={character.id}
          character={character}
          editing={editingId === character.id}
          onEditClick={() => handleEditClick(character)}
          onDeleteClick={() => handleDeleteClick(character.id)}
          onSaveClick={handleSaveClick}
        />
      ))}
    </ul>
  );
};

export default CharacterList;
