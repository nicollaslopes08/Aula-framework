    import{
        Entity,
        PrimaryGeneratedColumn,
        Column
    }from 'typeorm';
    
    @Entity('veiculos')
    
    export class Veiculo{
    
        @PrimaryGeneratedColumn()
        id!: number;
    
        @Column({length:50})
        marca!: string;
    
        @Column({length:100})
        modelo!: string;
    
        @Column({length:7,unique: true})
        placa!: string;
    
        @Column({type:'decimal', default:10.2})
        valorMensal!: number;
    
         @Column({default: true})
         ativa!: boolean;
    
    }