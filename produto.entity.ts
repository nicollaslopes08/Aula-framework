    import{
        Entity,
        PrimaryGeneratedColumn,
        Column
    }from 'typeorm';
    
    @Entity('produtos')
    
    export class Produto{
    
        @PrimaryGeneratedColumn()
        id!: number;
    
        @Column({length:100})
        nome!: string;
    
        @Column({length: 255})
        descricao!: string;
    
        @Column({type: 'decimal', default:10.2})
        preco!: number;
    
        @Column({type:'int', default:0})
        quantidade!: number;
    
         @Column({default: true})
         ativo!: boolean;
    
    }