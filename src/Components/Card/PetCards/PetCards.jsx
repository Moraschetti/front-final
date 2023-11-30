import { React, useState } from 'react';
import Modal from 'Components/Modales/Modal'
import Card from 'Components/Card/Card';
import AdoptionForm from 'Components/Forms/AdoptionForm/AdoptionForm';

const PetCards = ({ petList }) => {

    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [selectPetId, setSelectPetId] = useState(null);
    const [selectPetName, setSelectPetName] = useState(null);

    return (
        <>
            {petList.map(pet => (
                <Card
                    id={pet.id}
                    key={pet.id}
                    petImg={pet.urlImg}
                    description={pet.description}
                    name={pet.name}
                    sex={pet.sex}
                    age={pet.age}
                    attribute={pet.attributes.map((attribut) => (
                        <li key={attribut.attribut.id}>{attribut.attribut.attribut}</li>
                    ))}
                    location={pet.city}
                    onClick={() => { setSelectPetId(pet.id); setSelectPetName(pet.name); setIsOpenModal1(true) }}
                    interested={pet.interested > 0 ? `${pet.interested} interesados`
                        : '0 interesados'}
                >
                </Card>
            ))}
            <Modal isOpen={isOpenModal1}
                closeModal={() => { setIsOpenModal1(false) }}
                selectPetName={selectPetName}
                modalNumber="1" >
                <AdoptionForm petId={selectPetId} closeModal1={() => { setIsOpenModal1(false) }}></AdoptionForm>
            </Modal>
        </>
    )
};

export default PetCards;