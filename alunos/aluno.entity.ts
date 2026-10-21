import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity('alunos')

export class Aluno{

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length: 100})
    nome!: string;

    @Column({length: 150, unique: true})
    email!: string;

    @Column({default: true})
    ativo!: boolean;

}