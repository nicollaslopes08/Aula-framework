    import{
        Entity,
        PrimaryGeneratedColumn,
        Column
    }from 'typeorm';
    
    @Entity('modalidades')
    
    export class Modalidade{
    
        @PrimaryGeneratedColumn()
        id!: number;
    
        @Column({length:100})
        nome!: string;
    
        @Column({type:'text'})
        descricao!: string;
    
        @Column({type: 'int'})
        duracaoMinutos!: number;
    
        @Column({type:'decimal', default:10.2})
        valorMensal!: number;
    
         @Column({default: true})
         ativa!: boolean;
    
    }